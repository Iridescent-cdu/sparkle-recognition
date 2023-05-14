import React, { useEffect, useState } from 'react'
import { Image, Popconfirm, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import styled from '@emotion/styled'
import * as dayjs from 'dayjs'
import { useUserStore } from '@/store/user'
import { deleteRecognitionResult } from '@/service/modules/recognition/http.ts'

interface DataType {
  key: string
  imageId: string
  recognitionResult: string
  imageUrl: string
  imageCreatedAt: string
}

const TableContainer = styled.div`
  .ant-table-container {
    height: 47rem
  }
`
const DashboardTable: React.FC = () => {
  const userStore = useUserStore()
  const [isLoading, setIsLoading] = useState(false)
  async function handleDeleteImage(value: any) {
    setIsLoading(true)
    await deleteRecognitionResult({
      imageId: value.imageId,
    })
    await userStore.getRankUser()
    setIsLoading(false)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '图片',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      width: 250,
      render: image => <Image key={'imageUrl'} style={{ width: '5rem', height: 's5rem' }} src={image}></Image>,
    },
    {
      title: '识别结果',
      dataIndex: 'recognitionResult',
      key: 'recognitionResult',
      width: 300,
    },
    // {
    //   title: '特征值',
    //   dataIndex: 'recognitionFeature',
    //   key: 'recognitionFeature',
    //   width: 500,
    // },
    {
      title: '时间',
      dataIndex: 'imageCreatedAt',
      key: 'imageCreatedAt',
      width: 300,
      render: date => <div>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</div>,
    },
    {
      title: '操作',
      key: 'action',
      width: 300,
      render: value => (
        <Popconfirm
          description=''
          onConfirm={() => handleDeleteImage(value)}
          okText='是'
          cancelText='否'
          title={'是否确认删除'}>
          <a>删除</a>
        </Popconfirm>
      ),
    },
  ]
  const originDataSource = userStore.images
  const [currentDataSource, setCurrentDataSource] = useState(originDataSource)
  useEffect(() => {
    setCurrentDataSource(originDataSource)
  }, [originDataSource])
  const [currentPage, setCurrentPage] = useState(1)

  function handlePageChange(pageNum: number, pageSize: number) {
    setCurrentDataSource(originDataSource.slice((pageNum - 1) * pageSize, pageNum * pageSize) as [])
    setCurrentPage(pageNum)
  }

  const pagination = { // 分页配置
    current: currentPage,
    pageSize: 5,
    total: +userStore.currentUser.count,
    showSizeChanger: false,
    onChange: handlePageChange,
  }
  return (
    <TableContainer>

      <Table loading={isLoading} columns={columns} dataSource={currentDataSource} pagination={pagination} />
    </TableContainer>
  )
}

export default DashboardTable

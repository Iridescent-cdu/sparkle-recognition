import styled from '@emotion/styled'
import { Card } from 'antd'
import { useEffect } from 'react'
import dashboardIcon from '@/assets/dashboard.svg'
import userIcon from '@/assets/user.svg'
import DashboardTable from '@/views/dashboard/components/dashboard-table.tsx'
import { DashboardRankingCard } from '@/views/dashboard/components/dashboard-ranking-card.tsx'
import { useUserStore } from '@/store/user'

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140rem;

`
const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10.5rem;


  .ant-card {
    width: 29.8rem;
    height: 100%;
    margin-right: 5rem;

    .ant-card-body {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .cardData {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 11.7rem;
        height: 6.5rem;
      }
    }
  }
`
const ListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  .ant-card {
    width: 29.8rem;
    height: 100%;
  }
`

interface Props {

}

/* 个人信息看板 */
const Dashboard: React.FC<Props> = () => {
  const userStore = useUserStore()
  useEffect(() => {
    userStore.getRankUser()
    userStore.getCurrentUser()
  }, [])
  return (
    <DashboardContainer>
      <CardContainer>
        <Card>
          <img style={{ width: '6.5rem', height: '6.5rem' }} src={dashboardIcon} />
          <div className={'cardData'}>
            <span style={{ color: '#A3AED0' }}>图片数</span>
            <span style={{ color: '#1B2559', fontSize: '2.4rem' }}>{userStore.currentUser.count}</span>
          </div>
        </Card>
        <Card>
          <img style={{ width: '6.5rem', height: '6.5rem' }} src={userIcon} />
          <div className={'cardData'}>
            <span style={{ color: '#A3AED0' }}>用户排名</span>
            <span style={{ color: '#1B2559', fontSize: '2.4rem' }}>{userStore.currentUser.rank}</span>
          </div>
        </Card>
      </CardContainer>
      <ListContainer>
        <DashboardTable></DashboardTable>
        <DashboardRankingCard></DashboardRankingCard>
      </ListContainer>
    </DashboardContainer>
  )
}
export default Dashboard

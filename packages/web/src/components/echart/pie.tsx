import { useEffect } from 'react'
import echarts from './index.ts'

interface props {
  data: {}
}

export const Pie: React.FC<props> = ({ data }) => {
  const option = {
    title: {
      text: '特征值',
      left: 'center',
    },
    color: ['#8A2BE2', '#6A5ACD', '#BA55D3', '#9400D3', '#4B0082', '#663399'],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }

  useEffect(() => {
    const container = document.getElementById('container')!
    const pieEchart = echarts.init(container)
    pieEchart.setOption(option)
    return () => {
      pieEchart.dispose()
    }
  }, [data])
  return (
    <div id={'container'} style={{ width: '30rem', height: '20rem' }}></div>
  )
}

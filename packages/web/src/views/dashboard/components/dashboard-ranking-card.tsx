import { Card } from 'antd'
import styled from '@emotion/styled'
import calendarIcon from '@/assets/calendar.svg'
import userDefaultIcon from '@/assets/user-default.svg'
import rankIcon from '@/assets/rank.svg'
import { useUserStore } from '@/store/user'

const DashboardRankingCardContainer = styled.div`
  margin-left: 5rem;
  width: 29.8rem;
  height: 55.6rem;

  .rankingHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 7.2rem;
    padding: 1.8rem;
  }

  .rankingMain {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.3rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 12.2rem;
      height: 17.8rem;
      position: relative;
    }

    .rankIcon {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  .rankingFooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ant-card {
      width: 26.2rem;
      height: 5.4rem;
      border-radius: 3rem;
      background-color: #F4F6F9;
      margin-bottom: 1.4rem;

      .ant-card-body {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`

interface Props {

}

export const DashboardRankingCard: React.FC<Props> = () => {
  const { rankUser } = useUserStore()

  return (
    <DashboardRankingCardContainer>
      <Card>
        <div className={'rankingHeader'}>
          <span style={{ color: '#A3AED0' }}>排行榜</span>
          <img src={calendarIcon} />
        </div>
        <div className={'rankingMain'}>
          <div>
            <span style={{ color: '#5F41B2', fontSize: '2.4rem', fontWeight: '600' }}>最高使用者</span>
            <div style={{ width: '7.5rem', height: '7.5rem' }}>
              <img style={{ width: '7.5rem', height: '7.5rem' }} src={userDefaultIcon} />
              <img className={'rankIcon'} src={rankIcon} />
            </div>
            <span>{rankUser[0]?.name }</span>
            <span style={{ color: '#5F41B2', fontSize: '1.8rem', fontWeight: '600' }}>{rankUser[0]?.count}</span>
          </div>
        </div>
        <div className={'rankingFooter'}>
          <Card>
            <span style={{ color: '#211791', fontWeight: '600' }}>2ND</span>
            <img src={userDefaultIcon} />
            <span style={{ fontSize: '1.6rem', fontWeight: '400' }}>{rankUser[1]?.name || ''}</span>
            <span style={{ color: '#5F41B2', fontSize: '1.6rem', fontWeight: '600' }}>{rankUser[1]?.count }</span>
          </Card>
          <Card>
            <span style={{ color: '#211791', fontWeight: '600' }}>3RD</span>
            <img src={userDefaultIcon} />
            <span style={{ fontSize: '1.6rem', fontWeight: '400' }}>{rankUser[2]?.name || ''}</span>
            <span style={{ color: '#5F41B2', fontSize: '1.6rem', fontWeight: '600' }}>{rankUser[2]?.count }</span>
          </Card>
          <Card>
          <span style={{ color: '#211791', fontWeight: '600' }}>4TH</span>
          <img src={userDefaultIcon} />
          <span style={{ fontSize: '1.6rem', fontWeight: '400' }}>{rankUser[3]?.name || ''}</span>
          <span style={{ color: '#5F41B2', fontSize: '1.6rem', fontWeight: '600' }}>{rankUser[3]?.count}</span>
        </Card>

        </div>
      </Card>
    </DashboardRankingCardContainer>
  )
}

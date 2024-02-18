import FlexBox from 'components/FlexBox'
import SignUp from 'components/SignUp'

export default function Home() {
  return (
    <FlexBox
      justify="center"
      align="center"
      style={{ width: '100vw', height: '100vh' }}
    >
      <SignUp />
    </FlexBox>
  )
}

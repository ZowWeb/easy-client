import { App } from 'antd'

const useFeedback = () => {
  const { notification } = App.useApp()

  return {
    notification,
  }
}

export default useFeedback

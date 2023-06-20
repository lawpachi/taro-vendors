import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from 'react-vant'
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  render () {
    return (
      <View className='index'>
        <Button>Hello world!</Button>
      </View>
    )
  }
}

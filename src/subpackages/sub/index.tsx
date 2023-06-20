import { Component, PropsWithChildren } from "react";
import { Skeleton } from 'react-vant';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return <Skeleton avatar />
  }
}

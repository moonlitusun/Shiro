import type { FC } from 'react'
import type { CommentBaseProps } from './types'

import { LazyLoad } from '~/components/common/Lazyload'
import { Loading } from '~/components/ui/loading'

import { CommentBoxRoot } from './CommentBox/Root'
import { Comments } from './Comments'

const LoadingElement = <Loading loadingText="评论区加载中..." />
export const CommentAreaRoot: FC<
  CommentBaseProps & {
    allowComment: boolean
  }
> = (props) => {
  if (!props.allowComment) {
    return (
      <p className="mt-[100px] text-center text-xl font-medium">评论已关闭</p>
    )
  }

  return (
    <LazyLoad placeholder={LoadingElement}>
      <div className="relative mt-12">
        <CommentBoxRoot refId={props.refId} />

        <div className="h-12" />
        <Comments refId={props.refId} />
      </div>
    </LazyLoad>
  )
}
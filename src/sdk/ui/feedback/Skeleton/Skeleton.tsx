import {
  Skeleton as AntdSkeleton,
  SkeletonProps as AntdSkeletonProps,
} from "antd";
import { FC } from "react";

interface SkeletonProps extends AntdSkeletonProps {}

/**
 * Skeleton component
 *
 * This component is a wrapper around Ant Design's Skeleton component.
 * It is used to provide a placeholder preview for content that is still loading.
 *
 * @component
 * @example
 * ```tsx
 * <Skeleton />
 * ```
 *
 * @example
 * ```tsx
 * <Skeleton avatar paragraph={{ rows: 4 }} />
 * ```
 *
 * @example
 * ```tsx
 * <Skeleton active />
 * ```
 *
 * The Skeleton component supports various props to customize its appearance:
 * - `active`: Adds an animation effect to the skeleton
 * - `avatar`: Shows an avatar placeholder
 * - `paragraph`: Customizes the paragraph skeleton
 * - `title`: Shows a title placeholder
 * - `loading`: Controls whether the skeleton should be displayed
 *
 * @see {@link https://ant.design/components/skeleton Ant Design Skeleton} for more details on available props and usage.
 */

export const Skeleton: FC<SkeletonProps> = (props) => {
  return <AntdSkeleton {...props} />;
};

import { useGetStudentsQuery } from './store/studentApi';

export default function App1(props) {
  // 调用Api查询数据
  const { data, isSuccess, refetch } = useGetStudentsQuery(null, {
    // 用来指定useQuery返回的结果
    selectFromResult: result => {
      if (result.data) {
        result.data = result.data.filter(v => v.attributes.age < 18);
      }
      return result;
    },
    pollingInterval: 0, // 设置轮询的间隔，单位毫秒，如果为0则不轮询
    // skip: false, // 设置是否跳过当前请求
    skip: !props.id, // 如果有id，则加载详情，否则跳过请求
    refetchOnMountOrArgChange: false, // 是否每次都重新加载数据
    refetchOnFocus: false, // 是否在重新获取焦点时，重载数据（页面切换）
    refetchOnReconnect: false, // 网络中断后重连后，是否重新获取数据
  });

  return (
    <div>
      <button onClick={() => refetch()}>刷新</button>
      { isSuccess && data.data.map(v => <p key={v.id}>
        {v.attributes.name} ---
        {v.attributes.age} ---
        {v.attributes.gender} ---
        {v.attributes.address} ---
      </p>) }
    </div>
  );
}

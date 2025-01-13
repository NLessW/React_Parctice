export default function TabButton({ children, onSelect }) {
  // onClick, onSelect등으로 이름을 자유롭게 지을 수 있는건 리액트 프로젝트에서 이벤트에 의해 실행되는 함수를 받아들이는 prop의 이름을 지을 때 사용하고 자주 쓰이는 다른 규칙 중 하나이기 때문.
  // on으로 시작하면 특정 이벤트에 기반해 실행되는 함수에 의해 설정된다는 것을 알려줌

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

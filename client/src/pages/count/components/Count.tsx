import Button from "../../../components/Button";
import useCountStore from "../../../services/store/count.store";

const Count = () => {
  const { count, decrease, increase, setToSpecific } = useCountStore();
  return (
    <>
      <p>Count: {count}</p>
      <Button click={increase} label="Increase" />
      <Button click={decrease} label="Decrease" />
      <Button click={() => setToSpecific(5)} label="Set to 5" />
    </>
  );
};

export default Count;

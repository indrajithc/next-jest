import Options from "@components/entry/Options";

function OrderEntry() {
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}

export default OrderEntry;

const BoxText2 = () => {
  return (
    <div className="text-black absolute z-10 left-1/2 w-[400px]">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil, consectetur provident voluptate animi, ex dolores nesciunt perferendis quidem mollitia et est ipsum iusto soluta exercitationem perspiciatis repellat velit eos ut alias asperiores harum quaerat sequi nostrum. Quam autem reiciendis dolore id itaque iure nihil suscipit rerum, cupiditate non.</p>
      <div className="buttontiga flex gap-2">
        <button className="bg-white border rounded-full px-2 py-2 text-center">Split payment</button>
        <button className="bg-white border rounded-full px-2 py-2 text-center">Savings</button>
        <button className="bg-white border border-red-300 rounded-full px-2 py-2 text-center">International transfer</button>
      </div>
    </div>
  );
}

export default BoxText2;
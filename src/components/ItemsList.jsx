function ItemsList({ numbers }) {
  return (
    <ul className="groups__item-ul">
      {numbers.slice(0,5).map((number, index) => (
        <li className='groups__item-li' key={index}>{number}</li>
      ))}

      {numbers.length > 5 ? <li className='groups__item-it' key={6}>...</li>: ''}
    </ul>
  );
}

export default ItemsList;
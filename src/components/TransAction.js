import { useEffect, useState } from "react";

const TransAction = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filterTnx, setFilterTnx] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilterTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilterTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length) return <h3>add some tnx ...</h3>;

  return (
    <section>
      <input
        className="search"
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for tnx ..."
      />
      {filterTnx.length
        ? filterTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid #f87171" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          ))
        : "no item matchs !"}
    </section>
  );
};

export default TransAction;

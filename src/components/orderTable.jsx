import { useMemo, useState, useEffect } from "react";
import "../CSS/dashboard.css";

const faN = (num) =>
  new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(num);

export default function OrderTable({ onSubmit }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
     const mapped = cart.map((item, idx) => ({
      id: idx + 1,
      name: item.title,
      img: item.image ,
      qty: item.quantity,
      unitPrice: item.price,
    }));
    setRows(mapped);
  }, []);

  const totals = useMemo(() => {
    const subtotal = rows.reduce((s, r) => s + r.unitPrice * r.qty, 0);
    const discount = 0;
    const shipping = 0;
    const total = subtotal - discount + shipping;
    return { subtotal, discount, shipping, total };
  }, [rows]);

  const updateQty = (id, nextQty) => {
    if (nextQty < 0) return;
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, qty: nextQty } : r))
    );
  };

  return (
    <div className="order-wrap" dir="rtl">
      <div className="order-card">
        <h2 className="order-title">سفارش‌های شما</h2>

        {rows.length === 0 ? (
          <p>سبد خرید شما خالی است</p>
        ) : (
          <>
            <div className="table-responsive">
              <table className="order-table">
                <thead>
                  <tr>
                    <th className="col-product">محصول</th>
                    <th className="col-price">قیمت واحد</th>
                    <th className="col-qty">تعداد</th>
                    <th className="col-amount">مبلغ</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id}>
                      <td className="col-product">
                        <div className="prod-cell">
                          <div className="prod-img">
                            <img src={r.img} alt={r.name} />
                          </div>
                          <div className="prod-meta">
                            <div className="prod-name">{r.name}</div>
                          
                          </div>
                        </div>
                      </td>

                      <td className="col-price">
                        <span className="price">{faN(r.unitPrice)} تومان</span>
                      </td>

                      <td className="col-qty">{faN(r.qty)}</td>

                      <td className="col-amount">
                        <span className="amount">
                          {faN(r.unitPrice * r.qty)} تومان
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr className="total-row">
                    <td colSpan="2" className="total-label">
                      جمع کل
                    </td>
                    <td colSpan="2" className="total-amount">
                      {faN(totals.total)} تومان
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="cards-responsive">
              {rows.map((r) => (
                <div className="order-card-row" key={`m-${r.id}`}>
                  <div className="row-top">
                    <div className="m-img">
                      <img src={r.img} alt={r.name} />
                    </div>
                    <div className="m-meta">
                      <div className="m-name">{r.name}</div>
                    </div>
                  </div>
                  <div className="row-bottom">
                    <div>
                      <strong>قیمت:</strong> {faN(r.unitPrice)} تومان
                    </div>
                    <div className="m-qty">
                      <strong>تعداد:</strong>
                      <div className="qty-control-inline">{faN(r.qty)}</div>
                    </div>
                    <div>
                      <strong>مبلغ:</strong> {faN(r.unitPrice * r.qty)} تومان
                    </div>
                  </div>
                </div>
              ))}

              <div className="mobile-total">
                <div>جمع کل</div>
                <div className="mobile-total-amount">
                  {faN(totals.total)} تومان
                </div>
              </div>
            </div>
            <div className="order-actions">
              <button
                className="submit-order"
                onClick={() =>
                  onSubmit ? onSubmit(rows) : alert("سفارش ثبت شد")
                }
              >
                پرداخت
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

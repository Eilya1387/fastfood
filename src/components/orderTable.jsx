// OrderTable.jsx
import React, { useMemo, useState } from "react";
import "../CSS/dashboard.css";

const faN = (num) =>
  new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(num);

const sampleItems = [
  {
    id: 1,
    name: "همبرگر مخصوص",
    subtitle: "گوشت ۱۸۰ گرمی، پنیر چدار",
    img: "/burgers/Bacon Burger.webp",
    qty: 2,
    unitPrice: 120000,
  },
  {
    id: 2,
    name: "چیکن برگر",
    subtitle: "گوشت ۱۸۰ گرمی، پنیر اضافی",
    img: "/burgers/Chicken Burger.webp",
    qty: 1,
    unitPrice: 185000,
  },
  {
    id: 3,
    name: "پیتزا امریکن",
    subtitle: "گوشت چرخ کرده",
    img: "/burgers/american pizza.webp",
    qty: 3,
    unitPrice: 30000,
  },
];

export default function OrderTable({ items = sampleItems, onSubmit }) {
  const [rows, setRows] = useState(items);

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
                        <div className="prod-sub">{r.subtitle}</div>
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
                  <div className="m-sub">{r.subtitle}</div>
                </div>
              </div>
              <div className="row-bottom">
                <div>
                  <strong>قیمت:</strong> {faN(r.unitPrice)} تومان
                </div>
                <div className="m-qty">
                  <strong>تعداد:</strong>
                  <div className="qty-control-inline">
                    {faN(r.qty)}
                  </div>
                </div>
                <div>
                  <strong>مبلغ:</strong> {faN(r.unitPrice * r.qty)} تومان
                </div>
              </div>
            </div>
          ))}

          <div className="mobile-total">
            <div>جمع کل</div>
            <div className="mobile-total-amount">{faN(totals.total)} تومان</div>
          </div>
        </div>

        <div className="order-actions">
          <button
            className="submit-order"
            onClick={() => (onSubmit ? onSubmit(rows) : alert("سفارش ثبت شد"))}
          >
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

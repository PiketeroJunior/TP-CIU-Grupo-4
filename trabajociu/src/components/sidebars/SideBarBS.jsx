import React, { useState } from 'react'
import "./sidebars.css"

export default function SideBarBS() {
  const [open, setOpen] = useState({
    home: true,
    dashboard: false,
    orders: false,
    account: false,
  });

  const toggle = (section) => {
    setOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
      >
        <svg
          className="bi pe-none me-2"
          width="30"
          height="24"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5 fw-semibold">Collapsible</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-0${open.home ? '' : ' collapsed'}`}
            onClick={() => toggle('home')}
            aria-expanded={open.home}
          >
            Home
          </button>
          <div className={`collapse${open.home ? ' show' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-0${open.dashboard ? '' : ' collapsed'}`}
            onClick={() => toggle('dashboard')}
            aria-expanded={open.dashboard}
          >
            Dashboard
          </button>
          <div className={`collapse${open.dashboard ? ' show' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-0${open.orders ? '' : ' collapsed'}`}
            onClick={() => toggle('orders')}
            aria-expanded={open.orders}
          >
            Orders
          </button>
          <div className={`collapse${open.orders ? ' show' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-0${open.account ? '' : ' collapsed'}`}
            onClick={() => toggle('account')}
            aria-expanded={open.account}
          >
            Account
          </button>
          <div className={`collapse${open.account ? ' show' : ''}`}>
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

import React from "react";
import DateContract from "../../../Components/TalentComponents/DateContract/DateContract";
import OneContract from "../../../Components/TalentComponents/OneContract/OneContract";
import SearchContract from "../../../Components/TalentComponents/SearchContract/SearchContract";

export default function AllContracts() {
  return (
    <>
      <div class=" bg-gray">
        <div class="container">
          <div class="row">
            <h4 class="col-12 mt-5">Contracts</h4>
            <div class="card mt-4">
              <div class="card-header bg-white p-3">
                <SearchContract />
              </div>
              <div class="card-body row">
                <div class="col-12  mb-3">
                  <small>Sort By</small>
                  <DateContract />
                  <button
                    type="button"
                    className="mx-auto btn btn-light btn-sm border-gray"
                  >
                    <svg
                      style={{ marginLeft: 0 }}
                      xmlns=" http://www.w3.org/2000/svg"
                      width={17}
                      height={17}
                      fill="#37a000"
                      className="bi bi-arrow-down-up d-block "
                      viewBox="0 0 19 16"
                    >
                      <path
                        fillRule="evenodd"
                        stroke="#37a000"
                        strokeWidth=".7"
                        d=" M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5
                                    0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5
                                    0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708
                                    0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                  </button>
                  <span>3 total</span>
                  <>
                    <div className="form-check form-check-inline d-none-md">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Include closed contracts{" "}
                      </label>
                    </div>
                    <a type="button" className="float-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-download mx-1 stroke-2 csv2"
                        viewBox="0 0 1616"
                      >
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                      </svg>
                      Download CSV
                    </a>
                  </>
                </div>
                <hr />
                <div class="col-12 card-list">
                  <OneContract />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
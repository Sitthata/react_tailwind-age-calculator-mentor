import React from "react";
import { useState } from "react";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [formIsEmpty, setFormIsEmpty] = useState(false);

  const checkForm = () => {
    return day === "" || month === "" || year === "";
  };

  const calculateAge = (e) => {
    e.preventDefault();
    if (checkForm()) {
      setFormIsEmpty(true);
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const daysInMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += daysInMonth;
    }

    setAge({ years, months, days });
    setFormIsEmpty(false);
  };

  return (
    <div className=" bg-white p-10 rounded-3xl sm:mx-5 sm:rounded-br-[15rem] m-4 max-w-[45rem]">
      <form onSubmit={calculateAge}>
        <div className="flex justify-start gap-2 sm:gap-0">
          <div className="flex flex-col">
            <label htmlFor="day" className={formIsEmpty ? "input-label-error" : "input-label"}>
              Day
            </label>
            <input
              type="text"
              className={formIsEmpty ? "input-error" : "input"}
              placeholder="DD"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            ></input>
            {formIsEmpty && (
              <p className="error-text">Please fill out all fields</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="month" className={formIsEmpty ? "input-label-error" : "input-label"}>
              Month
            </label>
            <input
              htmlFor="text"
              className={formIsEmpty ? "input-error" : "input"}
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            ></input>
            {formIsEmpty && (
              <p className="error-text">Please fill out all fields</p>
            )}
          </div>
          <div className="flex flex-col">
            <label for="year" className={formIsEmpty ? "input-label-error" : "input-label"}>
              Year
            </label>
            <input
              htmlFor="text"
              className={formIsEmpty ? "input-error" : "input"}
              placeholder="YYYY"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            ></input>
            {formIsEmpty && (
              <p className="error-text">Please fill out all fields</p>
            )}
          </div>
        </div>

        <div className="flex my-5">
          <hr className="w-full my-auto bg-grey"></hr>
          <button type="submit" className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#FFF" stroke-width="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
      </form>

      <div>
        <h1 id="year-out" className="output-text whitespace-nowrap">
          <span className="text-primary">{age.years}</span> years
        </h1>
        <h1 id="month-out" className="output-text whitespace-nowrap">
          <span className="text-primary">{age.months}</span> months
        </h1>
        <h1 id="day-out" className="output-text whitespace-nowrap">
          <span className="text-primary">{age.days}</span> days
        </h1>
      </div>
    </div>
  );
};

export default AgeCalculator;

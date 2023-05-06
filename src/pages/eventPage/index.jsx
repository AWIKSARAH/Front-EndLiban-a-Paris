import React from "react";
import "./event.css";

const Event = () => {
  return (
    <div className="event__wrapper">
      <div className="event__wrapper__contain">
        <div className="event__social">
          <div className="event__img">
            <img src="./img.jpg" alt="'hello" />
          </div>
          <div className="event__media">
            <div className="social__link">
              <div className="social__logo"></div>
              <div className="social__content">phone</div>
            </div>
            <div className="social__link">
              <div className="social__logo"></div>
              <div className="social__content">website</div>
            </div>
            <div className="social__link">
              <div className="social__logo"></div>
              <div className="social__content">facebook</div>
            </div>
            <div className="social__link">
              <div className="social__logo">
                <div className="social__content">instagram</div>
              </div>
              <div className="social__link">
                <div className="social__logo"></div>
                <div className="social__content">linkedin</div>
              </div>
              <div className="social__link">
                <div className="social__logo"></div>
                <div className="social__content">twitter</div>
              </div>
            </div>
          </div>
          <div className="event__content">
            <div className="event__title">
              WOMEN AND ART INSTITUTIONS: RELATIONS AND PERSPECTIVES
            </div>
            <div className="event__info">
              <div className="event__time">
                <div className="flex"></div>
                <div className="flex-1 mt-3 sm:mt-5 flex flex-col items-center justify-start text-center px-0 sm:px-2">
                  <div className="mb-2 leading-tight">
                    <p className="text-xxs sm:text-sm">From 26-04-2023</p>
                    <p className="text-xxs sm:text-sm">To 26-04-2023</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start border-gray-400 border-r">
                <div className="flex"></div>
                <div className="flex-1 mt-3 sm:mt-5 flex flex-col items-center justify-start text-center px-0 sm:px-2">
                  <div className="mb-2 leading-tight">
                    <p className="text-xxs sm:text-sm">Paris</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="event_content">
              Lorem Ipsum is simply dummy text of
            </div>
            <div className="w-full break-words">
              <h3 className="font-bold text-lg mb-5">To Remember</h3>
              <div className="mt-5 grid grid-flow-row gap-0">
                <div className="grid grid-cols-2 border-b border-gray-400 py-2">
                  <div>Time</div>
                  <div>6:00 p.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

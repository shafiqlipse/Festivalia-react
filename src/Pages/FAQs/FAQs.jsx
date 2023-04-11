import React, { useState } from "react";
import PageHead from "../../components/PageHead";
import "./faqs.scss";
import BG from "../../static/bg.jpg";
import { Gen, Tick, Vend } from "../../Data/FaqsData";
import Accordion from "../../Data/Accordion";

const FAQs = () => {
  const [active, setActive] = useState(false);

  //   const Accord = (i) => {
  //     // Gen.forEach((i)=>{
  //         if (i===0) {
  //             setActive(true)
  //         }else{
  //             setActive(false)
  //         }
  //     // });
  //   };
  return (
    <div className="faqs-section">
      <PageHead
        par="Everything you need to know about the coolest cultural fes in town is right here!"
        hed="Frequently asked questions"
      />
      <div className="faqs-container">
        <div className="faqs flex">
          <div className="left">
            <h1>General</h1>
            <img src={BG} alt="bag" />
          </div>
          <div className="left">
            <Accordion/>
          </div>
        </div>


        <div className="faqs flex">
          
          <div className="left">
            {Tick.map((i) => {
              return (
                <div className="accord" key={i.id}>
                  <h2
                    className="flex"
                    onClick={() => {
                      Gen.forEach((element) => {
                        setActive(i.id);
                      });

                      console.log(i.id);
                    }}
                  >
                    {i.qsn} <span>{active ? "h" : "x"}</span>
                  </h2>
                  <p hidden={active !== i.id}>{i.ans}</p>
                </div>
              );
            })}
          </div>
          <div className="left">
            <h1>Tickets</h1>
            <img src={BG} alt="bag" />
          </div>
        </div>


        <div className="faqs flex">
          <div className="left">
            <h1>Vendors/Traders</h1>
            <img src={BG} alt="bag" />
          </div>
          <div className="left">
            {Vend.map((i) => {
              return (
                <div className="accord" key={i.id}>
                  <h2
                    className="flex"
                    onClick={() => {
                      Gen.forEach((element) => {
                        setActive(i.id);
                      });

                      console.log(i.id);
                    }}
                  >
                    {i.qsn} <span>{active ? "h" : "x"}</span>
                  </h2>
                  <p hidden={active !== i.id}>{i.ans}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

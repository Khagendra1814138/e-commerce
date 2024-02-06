import React, {useState, useRef} from "react";

import "./Faq.css";

import { MinusCircle } from 'react-feather';
import { PlusCircle } from 'react-feather';
import { ArrowDown } from 'react-feather';

import { Package } from 'react-feather';
import { RotateCcw } from 'react-feather';
import { Search } from 'react-feather';

import { OrderAndDeliveryData } from "./faqOrderAndDeliveryData";

export const FaqPage = () => {
    const OrdersAndDelivery = useRef(null);
    const ReturnAndRefunds = useRef(null);
    const ProductsAndStocks = useRef(null);
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
    };

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected (null);
        }
        setSelected (i);
    }

    return (
        <div className="faqPage">
            <header className="faqHeader">
                <h1>HOW CAN WE HELP YOU?</h1>
                <h2>Find the right answers below.</h2>
            </header>

            <section className="sectionFaqOptions">
                <div className="faqOptionsCard">
                    <div className="faqOptionIcon"><Package size={80}/></div>
                    <h2>Orders and Deliveries</h2>
                    <p>Frequently asked questions regarding your Orders and Deliveries.</p>
                    <button onClick={() => scrollToSection(OrdersAndDelivery)}>Show <ArrowDown/></button>
                </div>

                <div className="faqOptionsCard">
                    <div className="faqOptionIcon"><RotateCcw size={80}/></div>
                    <h2>Return and Refunds</h2>
                    <p>Frequently asked questions regarding your Return and Refunds.</p>
                    <button onClick={() => scrollToSection(ReturnAndRefunds)}>Show <ArrowDown/></button>
                </div>

                <div className="faqOptionsCard">
                    <div className="faqOptionIcon"><Search size={80}/></div>
                    <h2>Products and Stocks</h2>
                    <p>Frequently asked questions regarding Products and Stocks.</p>
                    <button onClick={() => scrollToSection(ProductsAndStocks)}>Show <ArrowDown/></button>
                </div>
            </section>


            <section ref={OrdersAndDelivery} className="sectionOrderandDevliveries">
                <h1>Orders and Deliveries</h1>
                {OrderAndDeliveryData.map((questionsAnswer, i) => {
                    return(
                        <div className="faqCardWrapper" key={questionsAnswer.id}>

                        <div className="questionFrame" onClick={() => toggle(i)}>
                            <h2>{questionsAnswer.question}</h2> 
                            <div className="faqShowHideBtn"> 
                                {selected === i ? <MinusCircle/> : <PlusCircle/> }
                            </div>
                        </div>
               
                        <div className={selected === i ? "content show" : "content"}>
                            {questionsAnswer.answer}
                        </div>
                 
                    </div>
                    )
                })}
            </section>


            <section ref={ReturnAndRefunds} className="sectionReturnAndRefunds">
                <h1>Return and Refunds</h1>
            </section>

            <section ref={ProductsAndStocks} className="sectionProductsAndStocks">
                <h1>Products and Stocks</h1>
            </section>

        </div>
    )
}
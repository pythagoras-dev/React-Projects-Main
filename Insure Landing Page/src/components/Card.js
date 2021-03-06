import React from 'react'
// import Container from 'react-bootstrap/Container'
import CardDetail from './CardDetail'
import snappyImg from '../images/icon-snappy-process.svg'
import affordableImg from '../images/icon-affordable-prices.svg'
import peopleImg from '../images/icon-people-first.svg'

function Carrd() {
    return (

        <section className='container'>
            <div className='about'>
                <h3 className="about-heading">We're different</h3>
                <div className='row about-main'>
                    <div className='col-lg-4 col-md-12 about-info'>
                        <CardDetail

                            img={snappyImg}
                            title='snappy process'
                            text='Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
                        >
                        </CardDetail>
                    </div>


                    <div className='col-lg-4 col-md-12 about-info '>
                        <CardDetail

                            img={affordableImg}
                            title='affordable prices'
                            text='We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.'
                        >
                        </CardDetail>
                    </div>


                    <div className='col-lg-4 col-md-12 about-info'>
                        <CardDetail

                            img={peopleImg}
                            title='people first'
                            text='Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.'
                        >
                        </CardDetail>
                    </div>
                </div>
            </div>

        </section>


    )
}

export default Carrd

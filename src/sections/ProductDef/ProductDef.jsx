import React from 'react';
import './ProductDef.css';

const ProductDef = ({ data }) => {
    return (
        <section className="product-def-section">
            <div className="container pd-grid-container">

                {/* Left Side: Information */}
                <div className="pd-info-col animate-fade-in-up">
                    <h2 className="pd-main-title">{data.title}</h2>

                    <div className="pd-text-content">
                        {data.description.split('\n\n').map((para, i) => (
                            <p key={i} className="pd-p">{para}</p>
                        ))}
                    </div>

                    <div className="pd-diff-section">
                        <h4 className="pd-diff-title">Producto Diferenciador</h4>
                        <div className="pd-diff-grid">
                            {data.diferenciador.map((item, idx) => (
                                <div key={idx} className="pd-diff-item">
                                    <div className="pd-diff-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <span className="pd-diff-text">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Concentric Visualization */}
                <div className="pd-vis-col">
                    <div className="pd-concentric-wrapper animate-fade-in-up">

                        {/* Outer Circle: Meta Producto */}
                        <div className="pd-circle pd-outer">
                            <div className="pd-circle-label top">Meta Producto</div>

                            <div className="pd-circle-label bottom">
                                <strong>Fuera del Inmueble Dentro del Proyecto</strong>
                                <p>{data.layers.metaProducto.join(' • ')}</p>
                            </div>

                            {/* Middle Circle: Producto Ampliado */}
                            <div className="pd-circle pd-middle">
                                <div className="pd-circle-label top">Producto Ampliado</div>

                                {/* Icons on the middle ring points */}
                                <div className="pd-side-icon icon-left">
                                    <i className="fa-solid fa-atom"></i>
                                </div>
                                <div className="pd-side-icon icon-right">
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </div>

                                <div className="pd-circle-label bottom">
                                    <p>{data.layers.ampliado.join(' • ')}</p>
                                </div>

                                {/* Inner Circle: Producto Nuclear */}
                                <div className="pd-circle pd-inner">
                                    <div className="pd-circle-label top">Producto Nuclear</div>
                                    <div className="pd-inner-bullets">
                                        {data.layers.nuclear.map((bullet, bidx) => (
                                            <div key={bidx}>• {bullet}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Far Right Legend - Outside the circles */}
                    <div className="pd-legend-vertical">
                        Elementos de valoración cuantitativa
                    </div>

                    {/* Branding footer inside section */}
                    <div className="pd-branding-footer">
                        <span>ARQUITECTURA FINANCIERA</span>
                        <div className="mini-logo"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductDef;

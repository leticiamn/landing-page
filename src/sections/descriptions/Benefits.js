import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/responsive.css';
class Benefits extends Component {
    render() {
        return (
            <div className="benefits-section">
                <div className="benefits-title"><p>Viva na região mais nobre da cidade.</p></div>
                <div className="benefits-content"><h4>Benefícios</h4>
                    <p>Imóveis de alto padrão com localizações privilegiadas e o conforto e segurança.</p></div>
                <div className="benefits-content"><h4>Exclusividade</h4>
                    <p>Luxo, requinte e sofisticação nos melhores bairros da zona sul da cidade.</p></div>
                
            </div>
        );
    }
}

export default Benefits;
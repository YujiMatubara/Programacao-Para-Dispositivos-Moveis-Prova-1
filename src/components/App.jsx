import React from 'react'
import { MapMarker } from '@primeicons/react'

const App = () => {
    const estiloSubtitulo = {
        color: '#3153D6',
        fontSize: '24px'
    }

    const obterAno = () => {
        const data = new Date()
        return  data.getFullYear()
    }

    return (
        <div>
            <h1 className="titulo">
                <MapMarker size={16} />
                RolêRadar
            </h1>
            <p style={estiloSubtitulo}>
                Descubra o que existe perto de você
            </p>

            <footer>
                RolêRadar © {obterAno()}
            </footer>
        </div>
    )
}

export default App
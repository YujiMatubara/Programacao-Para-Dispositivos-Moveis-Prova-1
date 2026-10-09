import React from 'react'

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
                RolêRadar
            </h1>
            <p1 style={estiloSubtitulo}>
                Descubra o que existe perto de você
            </p1>

            <footer>
                RolêRadar © {obterAno()}
            </footer>
        </div>
    )
}

export default App
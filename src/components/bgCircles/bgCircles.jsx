import './bgCircles.css';

import { useWindowSize } from '../../window/useWindowSize';

export default function BgCircles() {
    const width = useWindowSize();

    return (
        <>
            {width > 500
                ?
                (
                    <>
                        <div className="circles__first" />
                        <div className="circles__second" />
                        <div className="circles__third" />
                        <div className="circles__forth" />
                        <div className="circles__five" />
                    </>
                )
                :
                (
                    <>
                        <div className="circles__m-first" />
                        <div className="circles__m-second" />
                    </>
                )
            }

        </>
    )
}
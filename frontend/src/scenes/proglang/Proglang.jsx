/* ----------------------------------------- */
import c from '../../Images/c.png'
import cpp from '../../Images/ISO_C++_Logo.svg.png'
import python from '../../Images/python.png'
import java from '../../Images/java-logo-vert-blk.png'
import csharp from '../../Images/C-Sharp.png'
import rust from '../../Images/Rust_programming_language_black_logo.svg.png'
import R from '../../Images/r.jpg'
import go from '../../Images/golang.png'
/* ---------------------------------------- */
import './proglang.css'
import { Helmet } from 'react-helmet'


const Proglang = () => {
  return (
    <div className='proglang'>
      <Helmet>
        <title>Programming Languages</title>
      </Helmet>

      <div className="box">
        <img src={c} className='image' />
        <h2>C</h2>
        <p>C is a general-purpose computer programming language.</p>
        <a href="https://github.com/Resourcio-Community/C-language-resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={cpp} className='image' />
        <h2>C++</h2>
        <p>C++ is a powerful general-purpose programming language. It can be used to develop operating systems,
          browsers, games, and so on.</p>
        <a href="https://github.com/Resourcio-Community/Cpp-language-resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={python} className='image' />
        <h2>Python</h2>
        <p>Python is a high-level, general-purpose programming language.</p>
        <a href="https://github.com/Resourcio-Community/Python-resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={java} className='image' />
        <h2>Java</h2>
        <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few
          implementation dependencies as possible.</p>
        <a href="https://github.com/Resourcio-Community/JAVA-resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={csharp} className='image' />
        <h2>C#</h2>
        <p>C# is a general-purpose, high-level multi-paradigm programming language.</p>
        <a href="https://github.com/Resourcio-Community/C_Sharp-Resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={rust} className='image' />
        <h2>Rust</h2>
        <p>Rust is a multi-paradigm, general-purpose programming language.</p>
        <a href="https://github.com/Resourcio-Community/Rust-resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={R} className='image' />
        <h2>R</h2>
        <p>R is a programming language for statistical computing and graphics supported by the R Core Team and the R
          Foundation for Statistical Computing.</p>
        <a href="https://github.com/Resourcio-Community/R-resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
      <div className="box">
        <img src={go} className='image' />
        <h2>Go</h2>
        <p>Go is an open source programming language that makes it simple to build secure, scalable systems.</p>
        <a href="https://github.com/Resourcio-Community/Go-lang-resources" target="_blank">
          <button>Learn More...<ion-icon name="book-outline"></ion-icon></button>
        </a>
      </div>
    </div>
  )
}

export default Proglang
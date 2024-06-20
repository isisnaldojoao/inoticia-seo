import { useState } from 'react'
import image from './assets/in.png'
import './App.css'

export default function App() {
  const [tag, setTag]=useState("");
  const [categoriaSelecionada, setCategoriaSelecionada]=useState(0);


  const allTags = [
    {
      id:'0',
      name:'Acailandia',
      tags:'#acailandia #acailandiamaranhao #açailandiama #maranhao #webjornalismo'
    },
    {
      id:'1',
      name:'Imperatriz',
      tags:'#impertriz #imperatrizdomaranhao #imperatrizma #imperatrizmaranhão #maranhao #webjornalismo'
    },
    {
      id:'2',
      name:'Maranhão',
      tags:'#maranhao #notíciasdomaranhão #maranhao #webjornalismo #jornalismoonline'
    },
    {
      id:'3',
      name:'Sao Franscisco do Brejão',
      tags:'#saofranciscodobrejao #saofranciscodobrejaomaranhao #saofranciscodobrejaoma #webjornalismo'
    },
    {
      id:'4',
      name:'Politica',
      tags:'#politica #webjornalismo #jornalismoonline #news #noticias #jornalismo'
    },
    {
      id:'5',
      name:'Brasil',
      tags:'#brasil #br #webjornalismo #jornalismoonline #news #noticias #jornalismo'
    },
    {
      id:'6',
      name:'Esporte',
      tags:'#brasileirao #copadobrasil #futebol #campeonatobrasileiro'
    },
  ]

  function handleSwitchCategory(index:number){
    setCategoriaSelecionada(index)
  }

  function generatorSeo(){
    setTag(allTags[categoriaSelecionada].tags)
  }

 return(
  <div className='main'>
    <nav>
      <img src={image} alt="inoticiama"/>
    </nav>    
    <section className="main-seo">
        <section className="title-seo">
          <h1>
            Gerador de SEO
          </h1>
        </section>
        <section className='options-seo'>
          {allTags.map((tags,index)=>(
            <div className='categories-seo' key={tags.id} >
              <h1
              className={`option-seo ${index === categoriaSelecionada? 'selected' : ''}`}
              onClick={() => handleSwitchCategory(index)}
              >
              {tags.name}
              </h1>
          </div>
          ))}
        </section>

        <button className='genarator-seo' onClick={generatorSeo}>
            Gerar SEO
        </button>

        <section className='tags-seo'>
          {tag !=='' && <p>Para mais informações clique no link: www.inoticiama.com<br></br>{tag}</p>}
        </section>
    </section>
  </div>
 )
}


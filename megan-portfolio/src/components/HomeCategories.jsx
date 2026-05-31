import { useNavigate } from 'react-router-dom'
import sectionImages from '../lib/sections'
import './HomeCategories.css'

const make=(folder)=>sectionImages[folder] ?? []

export default function HomeCategories(){
 const navigate=useNavigate()
 const items=[
 {id:'portraits',label:'portraits',image:make('portraits')[0]},
 {id:'concerts',label:'concerts',image:make('concerts')[0]},
 {id:'editorial',label:'editorial and stylized',image:make('stylized')[0]},
 {id:'graphics',label:'graphics',image:make('graphics')[0]},
 ]
 return <section id="work" className="home-categories"><div className="home-categories__inner">{items.map(i=><button key={i.id} className="category-tile" onClick={()=>navigate(`/gallery/${i.id}`)}>{i.image&&<img src={i.image.src} alt={i.label}/>}<span>{i.label}</span></button>)}</div></section>
}

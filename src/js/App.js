import { square } from '../components/calculator/Calculator';
import { cube } from '../components/calculator/Calculator';

export function App() {
  console.log(square(2), 'calculator component');
  console.log(cube(4), 'calculator component');

  let btnCheckJs = document.querySelector('.click-me');
  btnCheckJs.addEventListener('click', () => {
    alert('Hello from JS')
  })
}

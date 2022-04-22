import { negociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new negociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit',  event => {
    event.preventDefault();
    controller.adiciona();
})

const negociacaoView = new NegociacoesView('#negociacoesView');
const template = negociacaoView.template();

console.log(template);
import {Cliente, Empresa, Telefone, Endereco} from 'rj4'

var empresa1 = new Empresa('XYZ S.A', 'Tech Solutions', '98.765.400/0002-18', new Endereco('rj', 'Rio de Janeiro', 'Rua das Startups', '106'))
empresa1.adicionarTelefone(new Telefone('21', '21778217'))
empresa1.adicionarTelefone(new Telefone('21', '21255346'))

let cliente1 = new Cliente('Ana', '324.672.446-33', new Endereco('SC', 'Florianópolis', 'Rua D', '404'))
let cliente2 = new Cliente('Carlos', '291.119.500-26', new Endereco('ba', 'Salvador', 'Rua F', '601'))
let cliente3 = new Cliente('Pedro', '998.321.583-55', new Endereco('pe', 'Recife', 'Rua G', '903'))
let cliente4 = new Cliente('Bianca', '199.204.224-75', new Endereco('CE', 'Fortaleza', 'Rua H', '800'))
let cliente5 = new Cliente('Rafael', '324.672.446-33', new Endereco('sp', 'São José dos Campos', 'Av Andrômeda', '045'))

cliente1.adicionarTelefone(new Telefone('48', '92359934'))
cliente1.adicionarTelefone(new Telefone('48', '33058267'))
cliente2.adicionarTelefone(new Telefone('71', '91231139'))
cliente2.adicionarTelefone(new Telefone('71', '30024729'))
cliente3.adicionarTelefone(new Telefone('81', '94402949'))
cliente3.adicionarTelefone(new Telefone('81', '38295885'))
cliente4.adicionarTelefone(new Telefone('85', '99926742'))
cliente4.adicionarTelefone(new Telefone('85', '34334911'))
cliente5.adicionarTelefone(new Telefone('12', '92672810'))
cliente5.adicionarTelefone(new Telefone('12', '39981371'))

empresa1.adicionarCliente(cliente1)
empresa1.adicionarCliente(cliente2)
empresa1.adicionarCliente(cliente3)
empresa1.adicionarCliente(cliente4)
empresa1.adicionarCliente(cliente5)

console.log(empresa1.detalhe())
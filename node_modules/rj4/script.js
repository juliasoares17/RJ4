class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get obterNome(){
        return this.nome
    }

    get obterNomeAlta(){
        return (this.nome).toUpperCase()
    }

    get obterNomeBaixa(){
        return (this.nome).toLowerCase()
    }

    set definirNome(novo_nome){
        this.nome = novo_nome
    }

    get obterEndereco(){
        return this.endereco.toString()
    }

    get obterEnderecoAlta(){
        return (this.endereco.toString()).toUpperCase()
    }    

    get obterEnderecoBaixa(){
        return (this.endereco.toString()).toLowerCase()
    }

    set definirEndereco(novo_endereco){
        this.endereco = novo_endereco
    }

    get obterTelefones(){
        return Array.from(this.telefones)
    }

    adicionarTelefone(novo_telefone) {
        this.telefones.add(novo_telefone)
    }

    removerTelefone(telefone) {
        this.telefones.delete(telefone)
    }

    get obterCpf(){
        return this.#cpf
    }
}

class Telefone {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }

    get obterDdd(){
        return this.ddd
    }

    set definirDdd(novo_ddd){
        this.ddd = novo_ddd
    }

    get obterNumero(){
        return this.numero
    }

    set definirNumero(novo_numero){
        this.numero = novo_numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    get obterEstado(){
        return this.estado
    }

    get obterEstadoAlta(){
        return (this.estado).toUpperCase()
    }

    get obterEstadoBaixa(){
        return (this.estado).toLowerCase()
    }

    set definirEstado(novo_estado){
        this.estado = novo_estado
    }

    get obterCidade(){
        return this.cidade
    }

    get obterCidadeAlta(){
        return (this.cidade).toUpperCase()
    }

    get obterCidadeBaixa(){
        return (this.cidade).toLowerCase()
    }

    set definirCidade(nova_cidade){
        this.cidade = nova_cidade
    }

    get obterRua(){
        return this.rua
    }

    get obterRuaAlta(){
        return (this.rua).toUpperCase()
    }

    get obterRuaBaixa(){
        return (this.rua).toLowerCase()
    }

    set definirRua(nova_rua){
        this.rua = nova_rua
    }

    get obterNumero(){
        return this.numero
    }

    set definirNumero(novo_numero){
        this.numero = novo_numero
    }

    toString() {
        return `Estado: ${this.obterEstadoAlta} Cidade: ${this.obterCidade} Rua: ${this.obterRua} Número: ${this.obterNumero}`
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get obterEndereco(){
        return this.endereco.toString()
    }

    get obterEnderecoAlta(){
        return (this.endereco.toString()).toUpperCase()
    }    

    get obterEnderecoBaixa(){
        return (this.endereco.toString()).toLowerCase()
    }

    set definirEndereco(novo_endereco){
        this.endereco = novo_endereco
    }

    get obterRazaoSocial(){
        return this.razaoSocial
    }

    get obterRazaoSocialAlta(){
        return (this.razaoSocial).toUpperCase()
    }

    get obterRazaoSocialBaixa(){
        return (this.razaoSocial).toLowerCase()
    }

    set definirRazaoSocial(nova_razaoSocial){
        this.razaoSocial = nova_razaoSocial
    }

    get obterNomeFantasia(){
        return this.nomeFantasia
    }

    get obterNomeFantasiaAlta(){
        return (this.nomeFantasia).toUpperCase()
    }

    get obterNomeFantasiaBaixa(){
        return (this.nomeFantasia).toLowerCase()
    }

    set definirNomeFantasia(novo_nomeFantasia){
        this.nomeFantasia = novo_nomeFantasia
    }

    get obterCnpj(){
        return this.#cnpj
    }

    get obterClientes() {
        return Array.from(this.clientes)
    }

    adicionarCliente(novo_cliente) {
        this.clientes.add(novo_cliente)
    }

    removerCliente(cliente) {
        this.clientes.delete(cliente)
    }

    get obterTelefones(){
        return Array.from(this.telefones)
    }

    adicionarTelefone(novo_telefone) {
        this.telefones.add(novo_telefone)
    }

    removerTelefone(telefone) {
        this.telefones.delete(telefone)
    }
    
    detalhe(){
        var resultado = `Razão Social: ${this.obterRazaoSocial}\nNome fantasia: ${this.obterNomeFantasia}\n----------------\n`
        for (let cliente of this.clientes){
            resultado += `Nome: ${cliente.obterNome}\n${cliente.obterEndereco}\n`
            for (let telefone of cliente.obterTelefones){
                resultado += `ddd: ${telefone.obterDdd} número: ${telefone.obterNumero}\n`
            }
            resultado += '\n'
        }
        return resultado
    }
}

export {Cliente, Telefone, Endereco, Empresa}
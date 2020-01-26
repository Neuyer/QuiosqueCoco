const AcessoService = require('../services/AcessoService');

module.exports = {
    signIn: AcessoService.signIn,
    logIn: AcessoService.logIn,
    logout: AcessoService.logout,
}
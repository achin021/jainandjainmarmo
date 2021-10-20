const marble = require('../util/marble')
const granite = require('../util/granite')
const ceramic = require('../util/ceramic600x1200')
const ceramic1 = require('../util/ceramic600x600')
const ceramic2 = require('../util/ceramic800x1600')

var marbleNames = marble.getMarbleName()
var marbleLinks = marble.getMarbleLink()
var graniteNames = granite.getGraniteName()
var graniteLinks = granite.getGraniteLink()
var ceramicNames = ceramic.getCeramicName()
var ceramicLinks = ceramic.getCeramicLink()
var ceramicNames1 = ceramic1.getCeramicName()
var ceramicLinks1 = ceramic1.getCeramicLink()
var ceramicNames2 = ceramic2.getCeramicName()
var ceramicLinks2 = ceramic2.getCeramicLink()

exports.getShop = (req,res,next) => {
    res.render('main');
}

exports.getMarbles = (req, res, next) => {
    res.render('marble',{
        marbleNames : marbleNames,
        marbleLinks : marbleLinks
    })
}

exports.getGranites = (req, res, next) => {
    res.render('granite',{
        graniteNames : graniteNames,
        graniteLinks : graniteLinks
    })
}

exports.getCeramic = (req, res, next) => {
    res.render('ceramictiles',{
        ceramicNames : ceramicNames,
        ceramicLinks : ceramicLinks,
        ceramicNames1 : ceramicNames1,
        ceramicLinks1 : ceramicLinks1,
        ceramicNames2 : ceramicNames2,
        ceramicLinks2 : ceramicLinks2
    })
}

exports.getCnc = (req, res, next) => {
    res.render('cnc')
}
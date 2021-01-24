"use strict"
const sessions = {};
const sessMaxSize = 20;
const store = {};
const results = {};
const resMaxSize = 20;

module.exports = {
    set: (key,value)=>store[key]=value,
    get: key=>store[key],
    sessions: {
        add: (id,token)=>{
            const sessKeysRa = Object.getOwnPropertyNames(sessions);
            const sessSize = sessKeysRa.length;
            if(sessSize > sessMaxSize) delete(sessions[sessKeysRa[0]]);
            sessions[id] = token;
        },
        get: id=>sessions[id],
        isi: session=>{
            return sessions[session] ? true : false;
        },
        all: ()=>sessions
    },
    results: {
        add: (id,result)=>{
            const resRa = Object.getOwnPropertyNames(results);
            const resRaSize = resRa.length;
            if(resRaSize > resMaxSize) delete(results[resRa[0]]);
            results[id] = result;
        },
        get: id=>results[id],
        isi: id=>{
            return results[id] ? true : false;
        },
        all: ()=>results
    }
}
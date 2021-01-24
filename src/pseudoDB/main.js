const sessions = {};
const sessMaxSize = 20;
const store = {};

module.exports = {
    set: (key,value)=>store[key]=value,
    get: key=>store[key],
    sessions: {
        add: (session,token)=>{
            const sessKeysRa = Object.getOwnPropertyNames(sessions);
            const sessSize = sessKeysRa.length;
            if(sessSize > sessMaxSize) delete(sessions[sessKeysRa[0]]);
            sessions[session] = token;
        },
        isi: session=>{
            return sessions[session] ? true : false;
        }
    }
}
const Redis = require('ioredis');
module.exports = new Cache({redis : config.redis });

function Cache(options){
  this._client = new Redis(options.redis);
}

Cache.prototype.set = async function (key,content,expire) {
  await this._client.set(key,JSON.stringify(content || ''));
  if(expire){
    await this._client.expire(key,expire);
  }
  return null;
};

Cache.prototype.get = async function(key,expire,refresh = false){
  let cacheContent = await this._client.get(key);
  if(cacheContent && !refresh){
    return JSON.parse(cacheContent);
  }
  return null;
 /* if(typeof func === 'function') {
    let content = await func();
    await this.set(key,content,expire);
    return content;
  }else{
    return null;
  }*/

};
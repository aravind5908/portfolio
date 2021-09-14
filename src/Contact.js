import React from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import idb from './idb';

function Contact() {
    var form = document.querySelector('form');
    var titleInput = document.querySelector('#title');
    var locationInput = document.querySelector('#location');
  
    

    var dbPromise = idb.open('posts-store',1,function(db) {
      if(!db.objectStoreName.contains('posts')){
        db.createObjectStore('posts',{keyPath:'id'});
      }
      if(!db.objectStoreName.contains('sync-posts')){
        db.createObjectStore('sync-posts',{keyPath:'id'});
      }
    });

    function writeData(st, data) {
      return dbPromise
      .then(function(db) {
        var tx = db.transaction(st, 'readwrite');
        var store = tx.objectStore(st);
        store.put(data);
        return tx.complete;
      });
    }

    form.addEventListener('submit',function (event) {
      event.preventDefault();

      if (titleInput.value.trim() === '' || locationInput.value.trim() === '') {
        return;

        if ('serviceworker' in navigator && 'SyncManager' in window) {
          navigator.serviceWorker.ready
          .then(function(sw) {
            var post = {
              id : new Date().toISOString(),
              title:titleInput.value,
              location: locationInput.value
            };
            writeData('sync-posts',post)
            .then(function(){
              return sw.sync.register('sync-new-post');

            })
            .then(function(){
              var data = {message:'your Post was saved for sync'};

            })
            
          })
        }
      }
    })
    return (
      <div>
      <form>
        <div classname="input-section mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input classname="mdl-textfield__input" type="text" id="title" />
          <label classname="mdl-textfield__label" htmlFor="title" name="title">Title</label>
        </div>
        <div className="input-section mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="manual-location">
          <input classname="mdl-textfield__input" type="text" id="location" />
          <label classname="mdl-textfield__label" htmlFor="location" name="location">Location</label>
        </div>
        <br />
        <div>
          <button classname="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-color--accent" type="submit" id="post-btn">Post!
          </button>
        </div>
        <br />
        <div>
          <button classname="mdl-button mdl-js-button mdl-button--fab" id="close-create-post-modal-btn" type="button">
            <i classname="material-icons">close</i>
          </button>
        </div>
      </form>
    </div>
  );
}

    
export default Contact



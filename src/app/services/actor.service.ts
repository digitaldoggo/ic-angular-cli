import { Injectable } from '@angular/core';
import { Actor, HttpAgent } from '@dfinity/agent';
import { canisterId as Hello_canister_id, idlFactory as Hello_idl } from 'dfx-generated/hello';
import _SERVICE from 'dfx-service/hello';

import dfxConfig from '../../../dfx.json';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  actor: _SERVICE;

  constructor() {
    const host = dfxConfig.networks.local.bind;
    const agent = new HttpAgent({ host });
    this.actor = Actor.createActor<_SERVICE>(Hello_idl, {
      agent: agent as any,
      canisterId: Hello_canister_id,
    });
  }
}

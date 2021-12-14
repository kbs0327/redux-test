import {atom} from 'jotai';
import {isEqual} from 'lodash';

const atomFamily = (initializeRead, initializeWrite) => {
  const atoms = []
  return (params) => {
    const found = atoms.find(x => isEqual(x[0], params))
    if (found) {
      return found[1]
    }
    const newAtom = atom(initializeRead(params), initializeWrite && initializeWrite(params))
    atoms.push([params, newAtom])
    return newAtom
  }
}

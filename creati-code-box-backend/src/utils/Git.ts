import git from 'nodegit';

export default class Git {
  constructor(private nodegit: any = git) {}
}

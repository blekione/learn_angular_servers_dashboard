import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No server was cereated!';
  serverName: string = 'Testserver';
  serverCreated: boolean = false;
  servers: string[] = ['Testserver1', 'Testserver2'];
  areDetailsShow: boolean = false;
  log: Date[] = [];

  constructor() { 
    setTimeout(
      () => {this.allowNewServers = true}, 
      2000
    );
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. The name is ' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  showDetails(): void {
    this.areDetailsShow = !this.areDetailsShow;
    this.log.push(new Date());
  }
}

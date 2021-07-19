import {Component, OnInit} from '@angular/core';
import {Network} from '@ionic-native/network/ngx';

@Component({
    selector: 'app-wifi',
    templateUrl: './wifi.page.html',
    styleUrls: ['./wifi.page.scss'],
})
export class WifiPage implements OnInit {

    connectionText: string;

    constructor(
        private network: Network
    ) {
    }

    ngOnInit() {
    }

    networkConnectionCheck(): void {
        // watch network for a disconnection
        const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            console.log('network was disconnected :-(');
            this.connectionText = '와이파이 연결 끊김';
        });

        // stop disconnect watch
        disconnectSubscription.unsubscribe();

        // watch network for a connection
        const connectSubscription = this.network.onConnect().subscribe(() => {
            console.log('network connected!');
            this.connectionText = '와이파이 연결 됨';
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });

        // stop connect watch
        connectSubscription.unsubscribe();
    }
}

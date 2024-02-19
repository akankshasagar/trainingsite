import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserstoreService } from 'src/app/services/userstore.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cs001',
  templateUrl: './cs001.component.html',
  styleUrls: ['./cs001.component.css'],
  animations: [
    trigger('drawerAnimation', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
      })),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CS001Component {
  drawerState = 'closed';
  public fullName: string = "";
  public email: string = "";
  showChapter1Topics: boolean = false;
  showChapter2Topics: boolean = false;
  showChapter3Topics: boolean = false;
  showChapter4Topics: boolean = false;
  showChapter5Topics: boolean = false;
  showChapter6Topics: boolean = false;
  showChapter7Topics: boolean = false;
  showChapter8Topics: boolean = false;
  showChapter9Topics: boolean = false;

  constructor(private auth: AuthService, private userStore: UserstoreService, private router: Router, private toastr: ToastrService) {
    this.userStore.getFullNameFromStore()
      .subscribe(val => {
        let fullNameFromToken = this.auth.getFullNameFromToken();
        this.fullName = val || fullNameFromToken
      });
    this.userStore.getEmailFromStore()
      .subscribe(val => {
        let emailFromToken = this.auth.getEmailFromToken();
        this.email = val || emailFromToken
      })
    // this.canNavigateToTypesOfFrauds = true;
    // this.canNavigateToWaysToAvoidScams = true;
  }

  toggleChapter1Topics() {
    this.showChapter1Topics = !this.showChapter1Topics;
  }

  toggleChapter2Topics() {
    this.showChapter2Topics = !this.showChapter2Topics;
  }

  toggleChapter3Topics() {
    this.showChapter3Topics = !this.showChapter3Topics;
  }

  toggleChapter4Topics() {
    this.showChapter4Topics = !this.showChapter4Topics;
  }

  toggleChapter5Topics() {
    this.showChapter5Topics = !this.showChapter5Topics;
  }

  toggleChapter6Topics() {
    this.showChapter6Topics = !this.showChapter6Topics;
  }

  toggleChapter7Topics() {
    this.showChapter7Topics = !this.showChapter7Topics;
  }

  toggleChapter8Topics() {
    this.showChapter8Topics = !this.showChapter8Topics;
  }

  toggleChapter9Topics() {
    this.showChapter9Topics = !this.showChapter9Topics;
  }

  CheckTest01(email: string) {
    // this.http.post<any>('https://localhost:7243/api/CourseEnrollments', { course })
    this.auth.test01(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/types-of-frauds']);
          // Handle success (e.g., show a success message)
        },
        error: (error) => {
          // console.error('Give the Test of Previous Topic', error);
          this.toastr.error(error?.error.message);
          // Handle error (e.g., show an error message)
        }
      });
  }

  CheckAttackVectorsTest001(email: string) {
    this.auth.isacttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/attack-surfaces-and-its-types/attack-vectors']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckAttackSurfacesTest001(email: string) {
    this.auth.isacttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/attack-surfaces-and-its-types/attack-surfaces']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckTypesAttackSurfacesTest001(email: string) {
    this.auth.isacttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/attack-surfaces-and-its-types/types-of-attack-surfaces']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckattacksurfacelimitedTest001(email: string) {
    this.auth.isacttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/attack-surfaces-and-its-types/attack-surfaces-limited']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }


  //Phishing Spoofing
  CheckPhishingSpoofingTypes(email: string) {
    this.auth.attackcurfacestest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/phishing-spoofing-and-its-types/phishing']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckSpoofingTypes(email: string) {
    this.auth.attackcurfacestest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/phishing-spoofing-and-its-types/spoofing']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckRansonware(email: string) {
    this.auth.attackcurfacestest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/phishing-spoofing-and-its-types/ransomware']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckWifiSecurity(email: string) {
    this.auth.attackcurfacestest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/phishing-spoofing-and-its-types/wifi-security']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }



  //Wireless Environment
  CheckAttacksWireless(email: string) {
    this.auth.phishingspoofingtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/wireless-environment-scams-and-precautions/attacks-on-wireless-environment']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckGuidelines(email: string) {
    this.auth.phishingspoofingtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/wireless-environment-scams-and-precautions/secure-wireless-communications']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckScams(email: string) {
    this.auth.phishingspoofingtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/wireless-environment-scams-and-precautions/scams']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckPrecautions(email: string) {
    this.auth.phishingspoofingtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/wireless-environment-scams-and-precautions/precautions']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckSecurity(email: string) {
    this.auth.phishingspoofingtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/wireless-environment-scams-and-precautions/desktop-security']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }



  //Wireless Environment
  CheckPractices(email: string) {
    this.auth.wirelessenvtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dos-and-donts/practices-to-follow']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckDos(email: string) {
    this.auth.wirelessenvtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dos-and-donts/dos']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckDonts(email: string) {
    this.auth.wirelessenvtest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dos-and-donts/donts']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }


  //Dos and Donts
  CheckIR(email: string) {
    this.auth.dosanddontstest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/IR-management/incident-response-management']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckPhases(email: string) {
    this.auth.dosanddontstest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/IR-management/phases-of-incident-response-management']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }


  CheckRole(email: string) {
    this.auth.dosanddontstest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/IR-management/role-of-incident-response-manager']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }


  // Incident Response Management
  CheckDataProtection(email: string) {
    this.auth.irmngmnttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/data/data-protection']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckProtection(email: string) {
    this.auth.irmngmnttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/data/data-protection-measures']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckTarget(email: string) {
    this.auth.irmngmnttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/data/hackers-generally-target']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckTools(email: string) {
    this.auth.irmngmnttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/data/tools-and-technologies']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }



  //Data Protection
  CheckDNS(email: string) {
    this.auth.dataprotecttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dns-and-apt-attacks/dns-attacks']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckAPT(email: string) {
    this.auth.dataprotecttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dns-and-apt-attacks/apt-attacks']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckSQL(email: string) {
    this.auth.dataprotecttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dns-and-apt-attacks/sql-injection']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckExploit(email: string) {
    this.auth.dataprotecttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dns-and-apt-attacks/attackers-exploitation']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckMIM(email: string) {
    this.auth.dataprotecttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/dns-and-apt-attacks/man-in-the-middle-attack']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }


  //DNS & APT attacks
  CheckCyber(email: string) {
    this.auth.dnsapttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/cyberstalking-and-cyberbullying/ddos']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckCStalk(email: string) {
    this.auth.dnsapttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/cyberstalking-and-cyberbullying/cyberstalking']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  CheckPrevention(email: string) {
    this.auth.dnsapttest001check(email)
      .subscribe({
        next: (response) => {
          this.router.navigate(['courses/cs001/cyberstalking-and-cyberbullying/cyberstalking-cyberbullying-prevention']);
        },
        error: (error) => {
          this.toastr.error(error?.error.message);
          this.toastr.warning('Mandatory to Complete the previous Chapter', 'Warning');
        }
      });
  }

  toggleDrawer() {
    this.drawerState = this.drawerState === 'closed' ? 'open' : 'closed';
  }

  logout() {
    this.auth.signOut();
  }
}

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppModule} from "./app.module";
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "./app-routing-module";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(() => {
            TestBed.configureTestingModule({
                    imports: [HttpClientTestingModule, AppModule, RouterTestingModule.withRoutes(routes)]

                }
            )
            fixture = TestBed.createComponent(AppComponent)
        }
    );

    it('should create the app', () => {
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render header component', () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('app-header')).toBeTruthy()
    });

});

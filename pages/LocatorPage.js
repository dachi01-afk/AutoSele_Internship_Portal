const BasePage = require('./BasePage');
const {By} = require('selenium-webdriver'); 

class LocatorPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

//Halaman Beranda
    async buttonBeranda () {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[1]/span'));
    }

    async buttonBergabung(){
        await this.clickElement(By.xpath('/html/body/div[1]/div/a'));
    }

    async buttonMasuk(){
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/a[1]'));
    }

    async buttonDaftar(){
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/a[2]'));
    }

    async clickTopJobs1(){
        await this.clickElement(By.xpath('/html/body/div[2]/div/div/a[1]'));
    }

    async clickLamarSekarang() {
        await this.clickElement(By.xpath('/html/body/div/div/div/div[1]/div[1]/form/button'));
    }

    async buttonLLB() {
        await this.clickElement(By.xpath('/html/body/div[3]/a'))
    }


    
// Halaman Telusuri Lowongan
    async buttonTL(){
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[2]/span'));
    }

    async filterLowonganByCompany() {
        // filter perusahaan -> PT Cyberindo Aditama (CBN)
        await this.clickElement(By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[1]/div/div[2]/label'));
    }

    async filterLowonganByLocation() {
        // filter lokasi -> jakarta
        await this.clickElement(By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[2]/div/div[2]/label'));
    }

    async clickJobTL1() {
        //pilih job pertama untuk cek detail
        await this.clickElement(By.xpath('/html/body/div/div/div/div/div[2]/div[2]/div/div[2]/a[1]'));
    }

    async buttonKembali () {
        await this.clickElement(By.xpath('/html/body/div/div/a'));
    }



// Halaman Perusahaan
    async buttonPerusahaan() {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[3]'));
    }




// Halaman Universitas
    async buttonUniversitas () {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[4]/span'));
    }

    async cekdetailUniv01() {
        await this.clickElement(By.xpath('/html/body/div/div/div[3]/div[1]/div/div/div/a'));
    }


   
// Halaman Tentang CBN
    async tentangCBN () {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[5]'));
    }

    // search 
    async inputSearch(testSearch) {
        await this.findElementInput(By.xpath('//input[@id="search"]'), testSearch);
    }


     
    
// Login
    async inputEmail(email) {
        await this.findElementInput(By.name('email'), email);
    }

    async inputPassword(password) {
        await this.findElementInput(By.name('password'), password);
    }

    async buttonSubmit () {
        await this.clickElement(By.xpath('//button[@type  ="submit"]'));
    }

    async Login(email, password) {
        await this.findElementInput(By.name('email'), email)
        await this.findElementInput(By.name('password'), password)
        await this.buttonSubmit();
    }


   
// Register
    async inputNamaLengkap(fullName) {
        await this.findElementInput(By.name('full_name'), fullName)
    }

    async inputJenisKelamin(select) {
        if(select == 1){
            await this.clickElement(By.id('gender-male'))
        }else if(select == 2) {
            await this.clickElement(By.id('gender-female'))
        }
    }

    async inputNoTelp(number) {
        await this.findElementInput(By.name('phone_number'), number)
    }

    async inputUniversitas(univ) {
        await this.clickElement(By.name('university_slug'));
        await this.findElementInput(By.name('university_slug'), univ)
        await this.clickElement(By.xpath('/html/body/div/div/div[2]/form/div[4]/div/ul/li'));

    }

    async Register(Fullname, Gender, Num, Univ, Email, Pass) {
        await this.inputNamaLengkap(Fullname)
        await this.inputJenisKelamin(Gender)
        await this.inputNoTelp(Num)
        await this.inputUniversitas(Univ)
        await this.inputEmail(Email)
        await this.inputPassword(Pass)
    }

    
    
// Forgot passord
    async buttonLupaPW() {
        await this.clickElement(By.xpath('/html/body/div/div/div[1]/form/a'));
    }

    
    
// Navbar // Job Application History
    async buttonProfil() {
        await this.clickElement(By.xpath('//button[@id="button-dropdown-profile"]'));
    }

    async buttonKeluar() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[5]/button'));
    }

    async buttonNavDashboard() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[4]/a'))
    }

    async buttonNotif() {
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/div[1]/button'));
    }

    async buttonRiwayatLamaran() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[3]/a'));
    }

    async buttonToProfil() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[1]/a'));
    }

    async buttonToBeranda() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[2]/a'));
    }

    async buttonNotif02() {
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/div[1]/div/div[2]/div/div[2]/div/div/h5'));
    }

    async buttonAllNotif() {    
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/div[1]/div/div[1]/p'));
    }

    async buttonDashboard() {
        await this.clickElement(By.xpath('/html/body/div/div/div/div[2]/div/table/tbody/tr/td[5]/div/a'));
    }

    
    
    
// Profil
    async buttonEditProfil() {
        await this.clickElement(By.xpath('/html/body/div/div[1]/div/div[2]/div/div[1]/div[1]/button'))
    }

    async editNamaLengkap(fullName) {
        await this.editElementInput(By.name('full_name'), fullName)
    }

    async editNoTelp(number) {
        await this.editElementInput(By.name('phone_number'), number)
    }

    
    
// Dashboard logbook
    async lihatSemuaProyek() {
        await this.clickElement(By.xpath('/html/body/div/div[1]/div/div[1]/div[1]/a'));
    }

    async aturLogbook() {
        await this.clickElement(By.xpath('/html/body/div/div[1]/div/div[2]/div[1]/a'));
    }

    async tambahLogbook() {
        await this.clickElement(By.xpath('/html/body/div/div[1]/div/div[2]/div[2]/div/a'));
    }

    async projekTerkini() {
        await this.clickElement(By.xpath('/html/body/div/div[1]/div/div[1]/div[2]/a'));
    }

    async addTugas() {
        await this.clickElement(By.xpath('/html/body/div[1]/div/div/div'));
    }

    
    
    
// input tugas
    // SelecetProyek
    async selectProyek(valueProject) {
        await this.clickElement(By.xpath('//select[@name="project_slug"]'));
        if(valueProject == 1) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[1]/div/select/option[2]')); // HRIS x CBN Internship Portal
        }else if (valueProject == 2) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[1]/div/select/option[3]')); // CBN Awards
        }else if(valueProject == 3) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[1]/div/select/option[4]')); // CBN Pick Me
        }else if(valueProject == 4) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[1]/div/select/option[5]')); // BeWeG + Jeje
        }
        
     }

    async inputJudul(Judul) {
        await this.findElementInput(By.xpath('//input[@name="title"]'), Judul)
    }

    async inputCatatan(catatan) {
        await this.findElementInput(By.xpath('//textarea[@name="notes"]'), catatan)
    }

    //Select Status
    async selectStatus(valueStatus) {
          await this.clickElement(By.xpath('//select[@name="status"]'));
        if(valueStatus == 1) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/div/select/option[2]')); // Akan Datang
        }else if (valueStatus == 2) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/div/select/option[3]')); // Sedang Berjalan
        }else if(valueStatus == 3) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/div/select/option[4]')); // Dalam Revisi
        }else if(valueStatus == 4) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/div/select/option[5]')); // Selesai
        }
    }

    async tambahDataTugas(valueProject, Judul, catatan, valueStatus) {
        await this.selectProyek(valueProject);
        await this.inputJudul(Judul);
        await this.inputCatatan(catatan);
        await this.selectStatus(valueStatus);
    }

    async hapusTugasno3() {
        await this.clickElement(By.xpath('/html/body/div[2]/div[1]/div/div/div/div[3]/div[2]/button'));
    }


// projectLD
    async editJudul(eJudul){
        await this.editElementInput(By.xpath('//input[@name="title"]'), eJudul)
    }

    async clickTask99() {
        await this.clickElement(By.xpath('/html/body/div[2]/div[1]/div/div/div/div[3]'));
    }



// logbook
    async addLogbook() {
        await this.clickElement(By.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/button'));
    }

    // input logbook
    async inputTanggal(tgl) {
        await this.findElementInput(By.xpath('//input[@name="date"]'), tgl);
    }

    // select proyek logbook
    async selectProyekLogBook(valueProject) {
        await this.clickElement(By.xpath('//select[@name="project_slug"]'));
        if(valueProject == 1) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[3]/select/option[2]')); // HRIS x CBN Internship Portal
        }else if (valueProject == 2) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[3]/select/option[3]')); // CBN Awards
        }else if(valueProject == 3) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[3]/select/option[4]')); // CBN Pick Me
        }else if(valueProject == 4) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[3]/select/option[5]')); // BeWeG + Jeje
        }else if (valueProject == 5) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[3]/select/option[6]')) //lainnya
        }
        
     }

    // add task log book
    async selectTugasLogBook (valueTugas) {
        await this.clickElement(By.xpath('//select[@name="task"]'));

        if(valueTugas == 1) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/select/option[2]')); //Task 1
        }else if(valueTugas == 2) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/select/option[3]')) //Task 2
        }else if(valueTugas == 3) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/select/option[4]')) //Task 3 
        }else if(valueTugas == 4) {
            await this.clickElement(By.xpath('//*[@id="form-add-modal"]/div/form/div[2]/div[4]/select/option[5]')) //Task 4 -> lainnya
        }
    }
    
    async inputLokasi(lokasi) {
        await this.findElementInput(By.xpath('//input[@name="location"]'), lokasi);
    } 

    async inputLogbook(tgl, valueProject, valueTugas, lokasi) {
        await this.inputTanggal(tgl);
        await this.selectProyekLogBook(valueProject);
        await this.sleep()
        await this.selectTugasLogBook(valueTugas)
        await this.inputLokasi(lokasi);
    }

    async clickEditLogbook1() {
        await this.clickElement(By.xpath('/html/body/div[2]/div[1]/div[2]/div[1]/table/tbody/tr[1]/td[4]/div/div[1]/button'));
    }

    async clickHapusLogbook1() {
        await this.clickElement(By.xpath('/html/body/div[2]/div[1]/div[2]/div[1]/table/tbody/tr[1]/td[4]/div/div[2]/button'));
        await this.buttonSubmit();
    }

    async editlokasi(lokasi) {
        await this.editElementInput(By.xpath('//input[@name="location"]'), lokasi)
        await this.buttonSubmit();
    }

}

module.exports = LocatorPage;
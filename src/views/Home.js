import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Input, FormGroup, Label } from 'reactstrap'
import { ArrowDown, ArrowUp } from "react-feather"

const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader className={'d-flex justify-content-between'}>
          <div>
            <CardText>8 августа 2022 года | 12:00</CardText>
            <CardTitle>Реальное время</CardTitle>
          </div>
          <div className={'d-flex flex-column align-items-end gap-2'}>
            <CardText>1 смена (7:30 - 15:30)</CardText>
            <FormGroup switch className={'form-check-success'}>
              <Input type="switch" role="switch" className={'cursor-pointer'}/>
              <Label check>Автомат розлива работает/включен</Label>
            </FormGroup>
          </div>
        
        </CardHeader>
        <CardBody className={'d-flex gap-1'}>
          <div className={'w-50 d-flex flex-column gap-1'}>
            <div className={'d-flex border-secondary border-1 p-2 h-50'}></div>
            <div className={'d-flex border-secondary border-1 p-2 h-50'}></div>
          </div>
          <div className={'d-flex flex-column gap-1'} style={{width: '40%'}}>
            <div className={'d-flex border-secondary border-1 p-2'}>
              <div className={'d-flex flex-column align-items-center pe-1 w-50'} style={{borderRight: '1px solid gray'}}>
                <CardText>Время в работе</CardText>
                <CardText className={'fw-bold text-success fs-3'}>04:00</CardText>
                <p>50 %</p>
              </div>
              <div className={'d-flex flex-column align-items-center ps-1 w-50'}>
                <CardText>Простои за смену</CardText>
                <p className={'text-danger'}><span className={'fw-bold fs-1'}>18</span><span className={'fs-6'}> min</span></p>
                <p>3.2 %</p>
              </div>
            </div>
  
  
            <div className={'d-flex'}>
              <div className={'d-flex border-secondary border-1 p-2'}>
                <div className={'d-flex flex-column align-items-center pe-1 w-50'} style={{borderRight: '1px solid gray'}}>
                  <CardText className={'text-center'}>Средняя скорость розлива с начала смены</CardText>
                  <CardText className={'fw-bold text-success fs-3'}>6 150</CardText>
                  <p>бут./час</p>
                </div>
                <div className={'d-flex flex-column align-items-center ps-1 w-50'}>
                  <CardText className={'text-center'}>Рекомендуемая скорость розлива для выполнения плана</CardText>
                  <p className={'text-success'}><span className={'fw-bold fs-1'}>ОК</span></p>
                  <p>3.2 %</p>
                </div>
              </div>
            </div>
  
            <div className={'d-flex w-100'}>
              <div className={'d-flex border-secondary border-1 p-2 w-100'}>
                <div className={'d-flex flex-column align-items-center pe-1 w-50'} style={{borderRight: '1px solid gray'}}>
                  <CardText>Скорость линии</CardText>
                  <p className={'text-danger'}><span className={'fw-bold fs-1'}>-5%</span><span className={'fs-6'}> <ArrowDown size={13}/></span></p>
                
                </div>
                <div className={'d-flex flex-column align-items-center ps-1 w-50'}>
                  <CardText>Прогнизируемый итог</CardText>
                  <p className={'text-success'}><span className={'fw-bold fs-3'}>102%</span><span className={'fs-6'}> <ArrowUp size={13}/></span></p>
                </div>
              </div>
            </div>
          </div>

        </CardBody>
      </Card>
    </div>
  )
}

export default Home

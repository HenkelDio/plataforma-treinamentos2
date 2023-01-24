import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import Signika from './Signika.ttf';

// Create styles
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row'
  },
  rightSide: {
    width: '95%',
    padding: '10px',
  },
  first: {
    width: '30px',
    height: '100vh',
    backgroundColor: '#13B026'
  },
  second: {
    width: '10px',
    height: '100vh',
    backgroundColor: '#109E21'
  },
  headerText: {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'heavy',
    color: 'green',
    fontFamily: 'Signika',
  },
  mainInformation: {
    width: '100%',
    minHeight: '100px',
    padding: '10px',
    border: '2px solid #ccc',
    borderRadius: '5px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '8px',
    fontSize: '20px',
  },
  information: {
    fontSize: '15px',
  },
  date: {
    margin: '0 auto',
    fontSize: '15px',
    marginTop: '20px',
  },
  assign: {
    margin: '0 auto',
    textAlign: 'center',
    width: '180px',
    fontSize: '10px',
    marginTop: '40px',
    borderTop: '2px solid gray'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '10px',
    width: '100%',
    marginTop: '20px',
    justifyContent: 'center',
  },
  teoricBody: {
    fontSize: '10px'
  },
  courseContent: {
    width: '33%',
    border: '2px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
  },
  bodyTecnical: {
    fontSize: '10px'
  },
  tecnicalContent: {
    marginBottom: '10px'
  }
});

Font.register({
  family: 'Signika',
  format: "truetype",
  src: Signika
});


function CertificatePdf(props) {

  const { data } = props
  const { certificateInfo, updatedAt } = data

  const jsonCertificateInfo = JSON.parse(certificateInfo)
  const { norm, teoricContent, praticalContent, certificateExpiration } = jsonCertificateInfo

  const expiration = Number(certificateExpiration);

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  const cpfMask = data.userInformation.user_register.slice(0, 3) + "." + data.userInformation.user_register.slice(2, 5) + "." + data.userInformation.user_register.slice(5, 8) + "-" + data.userInformation.user_register.slice(8, 10)


  return (
    <>
      <Document>
        <Page style={styles.body} orientation="landscape">

          <View style={styles.leftSide}>
            <View style={styles.first}></View>
            <View style={styles.second}></View>
          </View>

          <View style={styles.rightSide}>
            <View style={styles.header}>
              <Text style={styles.headerText}>CERTIFICADO</Text>
            </View>

            <View style={styles.mainInformation}>

              <View style={styles.title}>
                <Text>{data.courseInformation.course_title}</Text>
              </View>

              <View style={styles.information}>
                <Text>
                  Certifica que, {data.userInformation.user_name}, CPF: {cpfMask}. Participou do treinamento de {data.courseInformation.course_title}, de acordo com a {norm}, com, carga horária de {data.courseInformation.course_hours} horas. Com validade até {updatedAt.slice(8, 10) + " de " + months[(Number(updatedAt.slice(5, 7)) - 1)] + " de " + (expiration + Number(updatedAt.slice(0, 4)))}.
                </Text>
              </View>

              <View style={styles.date}>
                <Text>{updatedAt.slice(8, 10) + " de " + months[(Number(updatedAt.slice(5, 7)) - 1)] + " de " + updatedAt.slice(0, 4)}</Text>
              </View>

              <View style={styles.assign}>
                <Text style={styles.assignText}>participante</Text>
              </View>

              <View style={styles.content}>

                <View style={styles.courseContent}>
                  <Text style={styles.teoricBody}>
                    I) Conteúdo Prográmatico Téorico:
                    {'\n'}
                    {'\n'}
                    {teoricContent}
                  </Text>
                </View>

                <View style={styles.courseContent}>
                  <Text style={styles.teoricBody}>
                    II) Conteúdo Prográmatico Prático:
                    {'\n'}
                    {'\n'}
                    {praticalContent}
                  </Text>
                </View>

                <View style={styles.courseContent}>

                  <View style={styles.tecnicalContent}>
                    <Text style={styles.headerTecnical}>
                      RESPONSÁVEL TÉCNICO
                      {'\n'}
                      {'\n'}
                      RENY DE SOUZA BUENO
                      {'\n'}
                      REG. MTE. - 6255/SC
                      {'\n'}
                      CPF: 849.139.409-53
                    </Text>
                    <Text style={styles.bodyTecnical}>
                      CAPACITAÇÃO DO INSTRUTOR
                      {'\n'}
                      - TÉCNICO DE SEGURANÇA
                      {'\n'}
                      - BOMBEIRO PROFISSIONAL CIVIL 300H
                      {'\n'}
                      - EMERGENCIA COM INFLAMAVEIS 60H
                      {'\n'}
                      - SUPERVISOR TRAB. EM ALTURA 40H
                      {'\n'}
                      - AUX. ENF MILITAR - HGEC - CURITIBA 600H
                    </Text>
                  </View>

                  <View style={styles.tecnicalContent}>
                    <Text style={styles.headerTecnical}>
                      ROSANE RODRIGUES TAVARES
                      {'\n'}
                      REG. MTE. - 14412/PR
                      {'\n'}
                      CPF: 620.692.339-87
                    </Text>
                    <Text style={styles.bodyTecnical}>
                      CAPACITAÇÃO DO INSTRUTOR
                      {'\n'}
                      - TÉCNICO DE SEGURANÇA DO TRABALHO
                      {'\n'}
                      - SUPERVISOR TRAB. EM ALTURA 40H
                    </Text>
                  </View>


                </View>

              </View>

            </View>
          </View>

        </Page>

      </Document>

    </>
  )
}



export default CertificatePdf;    
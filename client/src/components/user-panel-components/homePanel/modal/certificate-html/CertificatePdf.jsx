import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import imagem from './certificate.jpg'

// Create styles
const styles = StyleSheet.create({
 header: {
  fontSize: 50,
  font: 'Oswald',
  textAlign: 'center',
  marginBottom: 20,
  color: 'green'
 },
 section: {
  margin: '10 10',
  padding: 20,
  borderWidth: 2,
  borderColor: 'black'
 },
 title: {
  textAlign: 'center',
  marginBottom: 10,
  fontSize: 23,
 },
 date: {
  textAlign: 'right',
  marginTop: 10,
 },
 assign: {
  margin: '40px auto',
  justifyContent: 'center',
  flexDirection: 'row',
  fontSize: 10,
  border: '2px solid black',
  width: 500,
  padding: 30,
  paddingTop: 50,
 },
 main: {
  marginRight: 20,
  borderTop: '2px solid black'
 },
 participant: {
  width: 200,
  textAlign: 'center',
  borderTop: '2px solid black'
 },
 footer: {
  flexDirection: 'row',
  fontSize: 10,
  margin: '0 auto',
 },
 information: {
  flexDirection: 'column',
 },
 logo: {
  fontSize: 50,
  color: 'green'
 },
 contact: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 7
 },
 labelLogo: {
  fontSize: 25,
  color: 'green'
 },
 first: {
  marginRight: 25,
  borderRight: '1px solid black',
  paddingRight: 10
 },
 second: {
  marginRight: 25,
  borderRight: '1px solid black',
  paddingRight: 10
 },
 container: {
  border: '2px solid black',
  margin: '50px auto',
 },
 bodySecondPage: {
  flexDirection: 'row',
  padding: 5
 },
 secondPage: {
  padding: 5
 },
 boxSecondPage: {
  width: 300,
  height: 300,
  fontSize: 12,
  border: '2px solid black',
 },
 bodySecondPageBox: {
  width: 230,
  height: 300,
  fontSize: 12,
  border: '2px solid black',
 },
 alignBox: {
  flexDirection: 'column',
  padding: 5
 },
 box: {
  border: '2px solid black',
  padding: 5,
  textAlign: 'center',
 },
 boxInfo: {
  fontSize: 9
 },
 HeaderSecondPage: {
  padding: 2,
  borderBottom: '2px solid black'
 },
 headerSecondPageMain: {
  fontSize: 15,
  textAlign: 'center',
  padding: 5
 },
 vencimento: {
  width: 500,
  margin: '0 auto',
  border: '2px solid black',
  textAlign: 'center',
  padding: 5
 },
});

Font.register({
  family: 'Oswald', 
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// Create Document Component
const MyDocument = () => (

  <>
  <Document>
    <Page style={styles.body} orientation="landscape">
      <View style={styles.header}>
        <Text>
          CERTIFICADO
        </Text>
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.title}>
            TREINAMENTO NR-35 - TRABALHO EM ALTURA COM CAMINHÕES
          </Text>
        </View>
        <View>
          <Text>
            Certifica que, Willian Henkel de Deus, CPF: 124.400.389-11. Participou do treinamento de Trabalho em Altura com Caminhões, de acordo com a Norma Regulamentadora 35 (NR 35), da Portaria SIT Nº 313, de 23/03/2012 do Ministério do Trabalho, com, carga horária de 8 horas, sendo 4 horas com aulas téoricas e 4 horas com aulas práticas.
          </Text>
        </View>
        <View style={styles.date}>
          <Text>
            07 de Janeiro de 2023
          </Text>
        </View>
        <View style={styles.assign}>
          <View style={styles.main}>
            <Text>
              RENY DE SOUZA - TST - BPC - INST. NR20
            </Text>
            <Text>
              Reg. MTE 6255/SC
            </Text>
          </View>
          <View style={styles.participant}>
            <Text>
              PARTICIPANTE
            </Text> 
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.logo}>
          <Text>
            ST
          </Text>
        </View>
        <View style={styles.information}>
          <View style={styles.labelLogo}>
            <Text>
              CAPACITAÇÃO EM SEGURANÇA DO TRABALHO
            </Text>
          </View>
          <View style={styles.contact}>
            <View style={styles.first}>
              <Text>
                CENTRO DE TREINAMENTO 
                {'\n'}
                NR 12, 18, 20, 33, 35
                {'\n'}
                CIPA - BRIG. COMB. INCÊNDIO
                {'\n'}
                PPRA - PCMSO
              </Text>
            </View>
            <View style={styles.second}>
              <Text>
                RENY DE SOUZA BUENO - ME
                {'\n'}
                CNPJ: 19.003.553/0001-26
                {'\n'}
                Contatos: (41) 99810-8728 / 99926-9551
                {'\n'}
                souzatreinamentos@hotmail.com.br
              </Text>
            </View>
            <View style={styles.third}>
              <Text>
               www.souzatreinamentosst.com.br
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.secondPage}>
        <View style={styles.container}>
          <View style={styles.headerSecondPageMain}>
            <Text>
              TREINAMENTO DA NR 35 - SEGURANÇA E SAÚDE NO TRABALHO: TRABALHO EM ALTURA CARGA E DESCARGA {'\n'}
              Carga Horária: 8 horas
            </Text>
          </View>
          <View style={styles.bodySecondPage}>
            <View style={styles.boxSecondPage}>
              <View style={styles.HeaderSecondPage}>
                <Text>
                  CRONOGRAMA PROGRÁMATICO:
                </Text>
              </View>
              <View style={styles.bodySecondPage}>
                <Text>
                  I) Conteúdo programático teórico:
                  {'\n'}
                  {'\n'}
                  1) Normas e Regulamentos aplicáveis ao trabalho em altura; 2) Análise de risco e condições impeditivas; 3) Riscos pontenciais inerentes ao trabalho em altura e medidas de prevenção e controle; 4) Sistemas, equipamentos e procedimentos de proteção coletiva (EPC's); 5) Equipamento de proteção individual (EPI's), para trabalho em altura: seleção, inspeção, conservação e limitação de uso; 6) Acidentes típicos em realiação de trabalho em altura;
                </Text>
              </View>
            </View>
            <View style={styles.boxSecondPage}>
              <View style={styles.HeaderSecondPage}>
                <Text>
                  CRONOGRAMA PROGRÁMATICO:
                </Text>
              </View>
              <View style={styles.bodySecondPage}>
                <Text>
                  II) Conteúdo programático prático:
                  {'\n'}
                  {'\n'}
                  1) Condutas em situação de emergência, incluindo noções de técnicas de resgate e primeiros socorros.
                </Text>
            </View>
            
          </View>
          <View style={styles.bodySecondPageBox}>
              <View style={styles.HeaderSecondPage}>
                <Text>
                  RESPONSÁVEL TÉCNICO
                </Text>
              </View>
              <View style={styles.bodySecondPageBoxContainer}>
                <View style={styles.alignBox}>
                  <View style={styles.box}>
                    <Text style={styles.boxName}>
                      RENY DE SOUZA BUENO
                      {'\n'}
                      REG. MTE - 6255/SC
                      {'\n'}
                      CPF: 849.139.409-53
                    </Text>
                    <Text style={styles.boxInfo}>
                      CAPACITAÇÃO DO INSTRUTOR
                      {'\n'}
                      - TÉCNICO DE SEGURANÇA DO TRABALHO
                      {'\n'}
                      - BOMBEIRO PROFISSIONAL CIVIL 300H
                      {'\n'}
                      EMERGENCIA COM INFLAMAVEIS 60H
                      {'\n'}
                      SUPERVISOR TRAB. EM ALTURA 40H
                      {'\n'}
                      - AUX. ENF MILITAR - HGEC - CURITIBA 600H
                    </Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.boxName}>
                      ROSANE RODRIGUES TAVARES
                      {'\n'}
                      REG. MTE. - 14412/PR
                      {'\n'}
                      CPF: 620.692.339-87
                    </Text>
                    <Text style={styles.boxInfo}>
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
      </View>
      </View>
      <View style={styles.vencimento}>
        <Text style={styles.logoVencimento}>
          SOUZA SEGURANÇA DO TRABALHO
        </Text>
        <Text>
          VALIDADE ATÉ 06/11/2023
        </Text>
      </View>
    </Page>
  </Document>

  </>
);

export default MyDocument;    